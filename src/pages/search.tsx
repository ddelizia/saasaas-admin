import React from "react";

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';


const searchClient = algoliasearch('F1E1M0TTLG', '0d7c2a7d834e62bae49e764fdad4b43e');

export default function Search() {
  return (
    <InstantSearch searchClient={searchClient} indexName="buscadorsubastas" >
      <SearchBox searchAsYouType={false} />
      <Hits />
    </InstantSearch>
  );
}