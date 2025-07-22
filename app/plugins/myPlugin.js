export default defineNuxtPlugin((nuxtApp) => {  
    nuxtApp.provide('useUtils', useUtils());
    return {
        provide: {  
            hello: 'Hello from myPlugin!'
        }
    }
    });