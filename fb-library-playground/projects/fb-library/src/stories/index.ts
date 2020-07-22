import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { CardComponent } from '../lib/components/card/card.component';

storiesOf('Card', module)
  .add('with some title', () => ({
    component: CardComponent,
    props: {
      title: 'title of the card',
      opened: true
    }
  }))
  .add('is closed', () => ({
    component: CardComponent,
    props: {
      title: 'i\'m closed card',
      opened: false
    }
  }))
  .add('with content projection', () => ({
    moduleMetaData: {
      declarations: [CardComponent]
    },
    template: `
      <fb-card title="hi" [opened]="true">
        <input type="text">
        <input type="text">
        <input type="text">
        <input type="text">
      </fb-card>
    `
  }))
  .add('with actions', () => ({
    component: CardComponent,
    props: {
      title: 'click me',
      toggle: action('toggle')
    }
  }));
