import { describe, expect, it } from 'bun:test';

import { countSmileys } from './countSmiles';

describe('countSmileys', () => {
  it('debería retornar 0 para un array vacío', () => {
    expect(countSmileys([])).toBe(0);
  });

  it('debería contar correctamente las caritas sonrientes sin nariz', () => {
    expect(countSmileys([':)', ':D', ';)', ';D'])).toBe(4);
  });

  it('debería contar correctamente las caritas sonrientes con nariz', () => {
    expect(countSmileys([':-D', ':~)', ';~D', ':-)', ';-D'])).toBe(5);
  });

  it('debería ignorar las caritas inválidas', () => {
    expect(countSmileys([';(', ':>', ':}', ':]'])).toBe(0);
  });

  it('debería manejar casos mixtos', () => {
    expect(countSmileys([':)', ';(', ';}', ':-D'])).toBe(2);
    expect(countSmileys([';D', ':-(', ':-)', ';~)'])).toBe(3);
    expect(countSmileys([';]', ':[', ';*', ':$', ';-D'])).toBe(1);
  });
});
