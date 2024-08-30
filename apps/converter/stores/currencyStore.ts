interface IState {
    currency: string;
    options: string[];
    rates: Record<string, number>;
}

interface ICurrencyOption {
    code: string;
    name: string;
}

export const useCurrencyStore = defineStore('currency', {
    state: (): IState => ({
        currency: CURRENCY_DICT.RUB,
        options: Object.values(CURRENCY_DICT),
        rates: {},
    }),

    getters: {
        currencyOptions(): ICurrencyOption[] {
            return this.options.map((code) => ({
                code,
                name: code.toUpperCase(),
            }));
        },
    },

    actions: {
        async fetchCurrency() {
            try {
                const {
                    public: { apiURL },
                } = useRuntimeConfig();

                this.rates = await $fetch('/api/currency', {
                    baseURL: apiURL,
                });
            } catch (e) {
                console.error('STORE:CURRENCY:FETCH_CURRENCY:', e);
            }
        },
    },
});
