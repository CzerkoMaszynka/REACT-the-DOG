import React from 'react';
import SearchBar from '.';
import { storiesOf } from "@storybook/react";


storiesOf('SearchBar', module)
  .add('default', () => <SearchBar />)