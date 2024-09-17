import React, { useEffect, userEffects, useState } from 'react';
import { PageCard, PageContent, RepoBtn, RepoDesc, RepoTitle } from './styles';

const Repo = () => {
  const [repo, setRepo] = useState();

  userEffects(async () => {
    const response = await fetch('https://api.github.com/users/Dgmal22/repos');

    setRepo(await response.json());
  }, []);

  return (
    <>
      {respo ? (
        <div>
          <h1>Total: {repo.length}</h1>
          <PageContent>
            {repo.map((r) => (
              <PageCard key={r.id}>
                <Content>
                  <RepoTitle>{r.name}</RepoTitle>
                  <RepoDesc>{r.descripition}</RepoDesc>
                  <RepoBtn target="_blank" href={r.html_url}>
                    Ver Repositório
                  </RepoBtn>
                </Content>
              </PageCard>
            ))}
          </PageContent>
        </div>
      ) : (
        <h1>Nenhum Repositório Encontrado.</h1>
      )}
    </>
  );
};

export default Repo;
