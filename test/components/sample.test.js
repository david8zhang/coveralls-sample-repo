/* global describe, it, before */
/* eslint-disable no-unused-expressions */
import { expect, renderComponent } from '../test_helper';
import { Sample } from '../../public/components';

describe('Sample', () => {
	describe('default configuration', () => {
		let component;
		const header = 'Sample';
		before(() => {
			component = renderComponent(Sample, { header });
		});

		it('should render the header', () => {
			expect(component).to.contain('Sample');
		});

		it('should change internal component state when button is clicked', () => {
			component.find('button').simulate('click');
			expect(component.find('h3')).to.exist;
			expect(component).to.contain('Hello!');
		});
	});
});
