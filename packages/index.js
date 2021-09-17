import BackTotop from './BackToTop';
import Modal from './Modal';
import Icon from './Icon';
import Button from './Button';
import Popover from './Popover';

const components = [
  BackTotop,
  Modal,
  Icon,
  Button,
  Popover
];

const install = function(Vue, options) {
  components.map(component => {
    Vue.use(component);
  });
};

export default {
  version: '1.0.0',
  install,
  BackTotop,
  Modal,
  Icon,
  Button,
  Popover
}
