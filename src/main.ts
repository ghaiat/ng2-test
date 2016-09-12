import { platformFuseDynamic } from '../fuse/platform.ts';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
if (process.env.ENV === 'production') {
    enableProdMode();
}

if (!window.fusejs) {
    document.addEventListener('DOMContentLoaded', () => {
		if (!(<any>window).bootstraped) {
            (<any>window).bootstraped = true;
            platformFuseDynamic().bootstrapModule(AppModule);
        }
    }, false);
} else {
    window.fusejs.bootstraper = () => platformFuseDynamic().bootstrapModule(AppModule);
}
