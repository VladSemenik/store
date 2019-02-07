import 'leaflet';

import './styles/index.scss';

import renderStores from './utils/renderStores';
import renderModal from './utils/renderModal';
import closeModal from './utils/closeModal';
import dragUse from './utils/dragUse';


renderStores();

renderModal();

closeModal();

dragUse();