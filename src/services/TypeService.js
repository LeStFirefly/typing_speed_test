export default class TypeService {
    async getText() {
        const _api = 'https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1';

        const result = await fetch(_api);

        if (!result.ok) {
            throw new Error(`Could not fetch ${_api}, recieved ${result.status}`);
        }

        return await result.json();
    }
}