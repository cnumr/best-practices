export const getLink = (item, origin) => {
  if (item && item._sys.relativePath) {
    const relativePath = item._sys.relativePath.replace(`.mdx`, ``).split('/');
    return (
      origin + '/' + relativePath[0] + '/' + `fiches` + '/' + relativePath[1]
    );
  }
  return undefined;
};

export const getFicheDatas = (fiche, origin) => {
  const output = {
    name: fiche?.title,
    url: getLink(fiche, origin),
    language: fiche?.language,
  };
  return new Response(JSON.stringify(output), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
export const getFichesDatas = (fiches, origin) => {
  // fiche?.node
  const ficheList = fiches?.map((fiche) => {
    return {
      name: fiche?.node?.title,
      url: getLink(fiche?.node, origin),
      language: fiche?.node?.language,
    };
  });

  return new Response(JSON.stringify(ficheList), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
