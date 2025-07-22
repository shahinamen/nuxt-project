export default defineNuxtPlugin((nuxtApp) => {  
    nuxtApp.provide('useUtils', useUtils());
    console.log(nuxtApp);
    return {
        provide: {  
            hello: 'Hello from myPlugin!'
        }
    }
    });