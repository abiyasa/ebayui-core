import { expect, use } from 'chai';
import chaiDom from 'chai-dom';
import { render, fireEvent, cleanup } from '@marko/testing-library';
import { pressKey } from '../../../common/test-utils/browser';
import template from '..';

use(chaiDom);
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe('given expand button is enabled', () => {
    beforeEach(async () => {
        component = await render(template);
    });

    describe('when expand button is clicked', () => {
        beforeEach(async () => {
            await fireEvent.click(component.getByRole('button'));
        });

        it('then it emits the event with correct data', () => {
            expect(component.emitted('click')).has.length(1);
        });
    });

    describe('when escape key is pressed', () => {
        beforeEach(async () => {
            await pressKey(component.getByRole('button'), {
                key: 'Escape',
                keyCode: 27,
            });
        });

        it('then it emits the event with correct data', () => {
            expect(component.emitted('escape')).has.length(1);
        });
    });
});

describe('given expand button is disabled', () => {
    beforeEach(async () => {
        component = await render(template, { disabled: true });
    });

    describe('when expand button is clicked', () => {
        beforeEach(async () => {
            await fireEvent.click(component.getByRole('button'));
        });

        it('then it does not emit the event', () => {
            expect(component.emitted('click')).has.length(0);
        });
    });

    describe('when escape key is pressed', () => {
        beforeEach(async () => {
            await pressKey(component.getByRole('button'), {
                key: 'Escape',
                keyCode: 27,
            });
        });

        it('then it does not emit the event', () => {
            expect(component.emitted('escape')).has.length(0);
        });
    });
});
