#!/bin/bash

# https://vercel.com/guides/how-do-i-use-the-ignored-build-step-field-on-vercel

echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"

if [[ "$VERCEL_GIT_COMMIT_REF" == "main" || "$VERCEL_GIT_COMMIT_REF" == "cms" || "$VERCEL_GIT_COMMIT_REF" == "feat/cms"  ]] ; then
  # Proceed with the build
    echo "✅ - Build can proceed"
  exit 1;

else
  # Don't build
  echo "🛑 - Build cancelled"
  exit 0;
fi