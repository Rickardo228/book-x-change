import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';


import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'


storiesOf('Button', module)
    .add('blue with text', () => <Button color={'blue'} onClick={action('clicked')}>Hello Button</Button>)
    .add('with some emoji', () => (
        <Button onClick={action('clicked')}>
            <span role="img" aria-label="so cool">
                😀 😎 👍 💯
      </span>
        </Button>
    ));
