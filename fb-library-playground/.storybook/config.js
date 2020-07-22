import { configure } from '@storybook/angular';

function loadStories(){
  require('../projects/fb-library/src/stories/index.ts')
}

configure(loadStories, module);
