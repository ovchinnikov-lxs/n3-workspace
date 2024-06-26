import { describe, expect, it } from 'vitest';
describe('test composable state', () => {
    it('should be availability', () => {
        expect(typeof useUiState).toBe('function');
    });

    it('should be return class list with modifier --is-active', () => {
        const COMPONENT_PROPS = {
            active: true,
        };
        const EXPECTED_VALUE = [
            {
                '--is-active': true,
            },
        ];

        const { stateClassList } = useUiState(COMPONENT_PROPS);
        expect(stateClassList.value).toEqual(EXPECTED_VALUE);
    });

    it('should be return class list with modifier --is-interesting', () => {
        const COMPONENT_PROPS = {
            interesting: true,
        };
        const EXPECTED_VALUE = [
            {
                '--is-interesting': true,
            },
        ];

        const { stateClassList } = useUiState(COMPONENT_PROPS);
        expect(stateClassList.value).toEqual(EXPECTED_VALUE);
    });

    it('should be return class list with modifier --is-disabled', () => {
        const COMPONENT_PROPS = {
            disabled: true,
        };
        const EXPECTED_VALUE = [
            {
                '--is-disabled': true,
            },
        ];

        const { stateClassList } = useUiState(COMPONENT_PROPS);
        expect(stateClassList.value).toEqual(EXPECTED_VALUE);
    });

    it('should be return class list with modifier --is-error', () => {
        const COMPONENT_PROPS = {
            error: 'Field is required',
        };
        const EXPECTED_VALUE = [
            {
                '--is-error': 'Field is required',
            },
        ];

        const { stateClassList } = useUiState(COMPONENT_PROPS);
        expect(stateClassList.value).toEqual(EXPECTED_VALUE);
    });

    it('should be return class list with modifier --is-required', () => {
        const COMPONENT_PROPS = {
            required: true,
        };
        const EXPECTED_VALUE = [
            {
                '--is-required': true,
            },
        ];

        const { stateClassList } = useUiState(COMPONENT_PROPS);
        expect(stateClassList.value).toEqual(EXPECTED_VALUE);
    });

    it('should be return class list with modifier --is-loading', () => {
        const COMPONENT_PROPS = {
            loading: true,
        };
        const EXPECTED_VALUE = [
            {
                '--is-loading': true,
            },
        ];

        const { stateClassList } = useUiState(COMPONENT_PROPS);
        expect(stateClassList.value).toEqual(EXPECTED_VALUE);
    });

    it('should be return empty class list', () => {
        const COMPONENT_PROPS = {};
        const EXPECTED_VALUE = [{}];

        const { stateClassList } = useUiState(COMPONENT_PROPS);
        expect(stateClassList.value).toEqual(EXPECTED_VALUE);
    });
});
