import { storiesOf } from '@storybook/angular';
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
  }));
