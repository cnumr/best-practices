import { GitHubProvider } from 'tinacms-gitprovider-github';
import type { GitProvider } from '@tinacms/datalayer';

type GitHubProviderOptions = ConstructorParameters<typeof GitHubProvider>[0];

export interface ProtectedGitHubProviderOptions extends GitHubProviderOptions {
  /**
   * Branches sur lesquelles l'édition est interdite.
   * Par défaut : ['main']
   */
  blockedBranches?: string[];
}

/**
 * GitProvider qui protège certaines branches contre l'édition directe.
 * Wrapper autour de GitHubProvider qui refuse les écritures sur les branches bloquées.
 */
export class ProtectedGitHubProvider implements GitProvider {
  private provider: GitHubProvider;
  private branch: string;
  private blockedBranches: string[];

  constructor(options: ProtectedGitHubProviderOptions) {
    const { blockedBranches, ...githubOptions } = options;
    this.blockedBranches = blockedBranches || ['main'];
    this.branch = options.branch;
    this.provider = new GitHubProvider(githubOptions);
  }

  private checkBranch(): void {
    if (this.blockedBranches.includes(this.branch)) {
      throw new Error(
        `Édition interdite sur la branche "${this.branch}". ` +
          `Veuillez créer une branche de travail et soumettre une Pull Request.`
      );
    }
  }

  async onPut(key: string, value: string): Promise<void> {
    this.checkBranch();
    return this.provider.onPut(key, value);
  }

  async onDelete(key: string): Promise<void> {
    this.checkBranch();
    return this.provider.onDelete(key);
  }
}
