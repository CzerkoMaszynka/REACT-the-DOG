import React from 'react';
import RandomDog from '.';
import { storiesOf } from "@storybook/react";

storiesOf('RandomDog', module)
  .add('default', () => <RandomDog />)