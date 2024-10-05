import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../components/ThemeContext';  // Adjust the path as per your structure
import ThemeSwitcher from '../components/ThemeSwitcher.jsx';

test('should toggle theme between light and dark', () => {
  const { getByText } = render(
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  );

  const toggleButton = getByText(/Toggle to dark theme/i);
  fireEvent.click(toggleButton);

  expect(document.body.getAttribute('data-theme')).toBe('dark');
});
