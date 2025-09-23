export default {
  data() {
    return {
      valorCorrente: '',
      numeroAnterior: null,
      operador: null,
      operadorClicado: false,
    };
  },
  methods: {
    limpar() {
      this.valorCorrente = '';
    },
    sinal() {
      this.valorCorrente = this.valorCorrente.charAt(0) === '-'
      ? this.valorCorrente.slice(1) 
      : '-' + this.valorCorrente;

      // Se o 1º char for - (já é neg.), pega a string a partir do 2º. Senão, adiciona o -
    },
    porcentagem() {
      this.valorCorrente = `${parseFloat(this.valorCorrente) / 100}`;
    },
    juntarNumeros(numero) {
      if (this.operadorClicado) {
        this.valorCorrente = '';
        this.operadorClicado = false;
      }
      this.valorCorrente = `${this.valorCorrente}${numero}`;
    },
    ponto() {
      if (this.valorCorrente.indexOf('.') === -1) {
        this.juntarNumeros('.');
      }
    },
    setarValor() {
      this.numeroAnterior = this.valorCorrente;
      this.operadorClicado = true;
    },
    resultado() {
      this.valorCorrente = `${this.operador(
        parseFloat(this.numeroAnterior), // num1
        parseFloat(this.valorCorrente) // num2
      )}`;
      this.numeroAnterior = null;
    },
    dividir() {
      this.operador = (num1, num2) => num1 / num2;
      this.setarValor();
    },
    multiplicar() {
      this.operador = (num1, num2) => num1 * num2;
      this.setarValor();
    },
    diminuir() {
      this.operador = (num1, num2) => num1 - num2; 
      this.setarValor();
    },
    somar() {
      this.operador = (num1, num2) => num1 + num2;
      this.setarValor();
    },
    log() {
      this.operador = (num1, num2) => Math.log10(num2); 
      this.setarValor();
    },
    logX() {
      this.operador = (num1, num2) => Math.log10(num1) / Math.log10(num2); 
      this.setarValor();
    },
    raiz() {
    
    },
    raizX() {
    
    },
    quadrado() {
    
    },
    potencia() {
    
    }
  }
};