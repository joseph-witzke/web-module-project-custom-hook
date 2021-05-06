import useLocalStorage from './useLocalStorage';

 const useDarkMode = () => {
    const [someValue, setSomeValue] = useLocalStorage('toggle')

    return [someValue, setSomeValue];
}

export default useDarkMode;