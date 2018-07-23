import dayjs from 'dayjs';
const tokenData = (() => {
    let data;
    const key = '_token_';
    return {
        getToken () {
            try {
                data = data || JSON.parse(localStorage.getItem((key)) || '');
                return data && data.expiredAt > dayjs().valueOf() ? data.token: '';
            } catch {
                return '';
            }
        },
        setToken (token, expiredAt) {
            data = { token, expiredAt: dayjs(expiredAt).valueOf() };
            localStorage.setItem(key, JSON.stringify(data));
        }
    }
})();
export const getToken = tokenData.getToken;
export const setToken = tokenData.setToken;