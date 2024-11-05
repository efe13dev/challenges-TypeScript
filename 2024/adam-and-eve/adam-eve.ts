// Exportamos todas las clases necesarias
export class Human {
  constructor(public name: string) {}
}

export class Man extends Human {
  // El constructor se hereda automáticamente
}

export class Woman extends Human {
  // El constructor se hereda automáticamente, igual que en la clase Man
}

export const God = {
  create(): Human[] {
    return [new Man('Adam'), new Woman('Eve')];
  }
};
