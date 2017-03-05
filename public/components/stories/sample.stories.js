import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Sample } from '../index';

storiesOf('Sample', module)
	.add('Default Sample', () => (
		<Sample header='Sample' />
	));
