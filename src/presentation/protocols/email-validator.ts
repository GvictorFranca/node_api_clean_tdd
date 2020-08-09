export interface EmailValidator {
  isValid (email: string): boolean // Recebe email e retorna um booleano
}
