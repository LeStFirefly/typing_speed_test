export default class TypeService {
    async getText() {
        //const _api = 'https://fish-text.ru/get?number=1'; //коротки текст
        const _api = 'https://fish-text.ru/get?number=3';

        const result = await fetch(_api);

        if (!result.ok) {
            throw new Error(`Could not fetch ${_api}, recieved ${result.status}`);
        }

        return await result.json();
    }
}