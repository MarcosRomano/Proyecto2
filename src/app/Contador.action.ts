import { Action } from './dependencias';

export const DecrementarAction:Action={
    type:'decrementar'
}

export const IncrementarAction:Action={
    type:'incrementar'
}

export const multiplicarAction:Action={
    type:'multiplicar',
    payload:2
}

export const dividirAction:Action={
    type:'dividir',
    payload:2
}