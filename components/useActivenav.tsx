import { usePathname } from 'next/navigation';

const useActivenav = (name: string) => {
  const path = usePathname();
  return path === name ? 'active' : '';
};

export default useActivenav;
