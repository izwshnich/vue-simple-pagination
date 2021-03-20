import { DefineComponent, Plugin } from 'vue';

declare const SimplePagination: DefineComponent<{}, {}, any> & { install: Exclude<Plugin['install'], undefined> };
export default SimplePagination;
