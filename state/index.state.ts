export interface HomeInitialState {
    colorScheme: 'light' | 'dark';
    lightMode: 'light' | 'dark';
    page: string;
}

export const initialState: HomeInitialState = {
    colorScheme: 'light',
    lightMode: 'light',
    page: '/home'
};
