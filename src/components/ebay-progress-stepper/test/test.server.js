import { use } from 'chai';
import { composeStories } from '@storybook/marko/dist/testing';
import { snapshotHTML } from '../../../common/test-utils/snapshots';
import * as stories from '../progress-stepper.stories';

const { InProgress, Blocked, Information, Migrator } = composeStories(stories);

const htmlSnap = snapshotHTML(__dirname);

use(require('chai-dom'));

it('renders in progress progress-stepper', async () => {
    await htmlSnap(InProgress);
});

it('renders vertical progress-stepper', async () => {
    await htmlSnap(InProgress, { direction: 'colummn' });
});

it('renders default state progress-stepper', async () => {
    await htmlSnap(InProgress, { defaultState: 'active' });
});

it('renders default state upcoming progress-stepper', async () => {
    await htmlSnap(InProgress, { defaultState: 'upcoming' });
});

it('renders default state complete progress-stepper', async () => {
    await htmlSnap(InProgress, { defaultState: 'complete' });
});

it('renders blocked progress-stepper', async () => {
    await htmlSnap(Blocked);
});

it('renders information progress-stepper', async () => {
    await htmlSnap(Information);
});

it('renders migrator from stepper', async () => {
    await htmlSnap(Migrator);
});

it('renders default without pragraph', async () => {
    await htmlSnap(InProgress, {
        autoParagraph: false,
        a11yHeadingText: 'Other',
        a11yHeadingTag: 'h3',
    });
});
