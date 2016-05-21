import template from './home.html';
import controller from './home.controller';
import './home.styl';

let homeComponent = {
    restrict    : 'E',
    bindings    : {},
    template,
    controller,
    controllerAs: 'vm',
    $routeConfig: [
        {
            path: '/',
            name: 'Applicants',
            component: 'applicants',
            useAsDefault: true
        }
    ]
};

export default homeComponent;
