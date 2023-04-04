import React,{Component} from 'react';
import {StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';


class AulaImagem extends Component{
  constructor(props){
    super(props)

    this.state={
      frasetxt:'Frase da Sorte',
      img:require('./assets/biscoito.png'), // essa é a maneira para importar imagems para o react native
      quebrou:false
  }

    this.frases = [
      'Eu prefiro morrer do que peder a vida',
      'Não há nada mais trabalhoso do que viver sem trabalhar',
      'O problema não é o trabalhar o problema é ter que trabalhar',
      "Não se preocupe tanto com o tamanho da porção, preocupe-se com a quantidade de vezes que ela é servida.",
      "Não existe problema que um bom pastel de vento não resolva.",
      "Um dia sem risadas é um dia desperdiçado.",
      "O importante é nunca perder a pose, mesmo que esteja caindo de cara no chão.",
      "Se a vida te der limões, faça limonada e venda para os vizinhos.",
      "Não fique triste com a vida, ela não tem culpa de ser tão engraçada.",
      "O melhor remédio para o estresse é um chá de sumiço.",
      "Quando a vida te dá uma rasteira, faça uma lambada e dance.",
      "O importante não é ganhar ou perder, mas sim como você dança a quadrilha.",
      "Nunca desista dos seus sonhos, a não ser que você sonhe em ser um churro.",
      "Não há nada mais valioso do que a amizade verdadeira.",
      "As coisas boas da vida levam tempo para acontecer.",
      "Aprenda a valorizar as coisas simples da vida.",
      "Não desanime diante dos obstáculos, tente sempre superá-los.",
      "Com bom humor e dedicação, é possível conquistar muitas coisas.",
      "A honestidade é sempre a melhor escolha, mesmo que pareça difícil.",
      "Seja grato pelo que tem e não pelo que falta.",
      "Não se preocupe tanto com o futuro, aproveite o presente.",
      "O verdadeiro valor de uma pessoa está no coração.",
      "A felicidade está nas pequenas coisas, como um sorriso sincero.",
      "Se você acha que está tendo um dia ruim, lembre-se que sempre pode piorar.",
      "O seu azar é tão grande que se você jogar uma moeda para o alto, ela cai de lado.",
      "Não é só um azar, é uma maldição de família.",
      "Se você acha que está com azar, experimente usar meias brancas em um dia de chuva.",
      "O azar te persegue? Talvez seja hora de começar a persegui-lo de volta.",
      "Não é que você tenha azar, é que a sorte simplesmente tem medo de se aproximar de você.",
      "Se o azar fosse um superpoder, você seria o herói mais poderoso do mundo.",
      "Não é que o azar te segue, é que você é o próprio ímã de azar.",
      "O seu azar é tão grande que se você comprasse um guarda-chuva, faria sol o dia inteiro.",
      "Se azar fosse um esporte olímpico, você seria a medalha de ouro.",
      "Não desanime, o fracasso é apenas o primeiro passo para o sucesso... ou para o fundo do poço.",
      "Se a vida te der limões, faça uma limonada bem azeda e ofereça para os seus inimigos.",
      "Se você está se sentindo sozinho, lembre-se que há um azarado em algum lugar do mundo que tem problemas piores que os seus.",
      "Não seja tão duro consigo mesmo, o universo já está fazendo isso por você.",
      "Não desista dos seus sonhos, a menos que o seu sonho seja se tornar um pirata e saquear a sua própria casa.",
      "Se a vida te dá uma rasteira, aproveite e faça uma cambalhota para impressionar os seus amigos.",
      "Não se preocupe em ser perfeito, ninguém é. Exceto talvez o seu primo Chato.",
      "Não seja tão pessimista, as coisas sempre podem piorar. Ou talvez não, vai saber.",
      "Se você acha que está indo de mal a pior, pare e dê uma olhada no mapa astral do seu signo. Talvez ajude... ou não.",
      "Não desista, o sucesso está a apenas um passo de distância. Ou talvez a quilômetros de distância, mas quem sabe, né?",
      "voce menos sorte que uma tangerina",
      "Não se preocupe tanto com os seus problemas, eles não se preocupam tanto com você.",
      "Se você está com problemas, lembre-se que sempre há alguém em uma situação pior. E provavelmente é o seu tio Louco.",
      "Não se esforce tanto para ser perfeito, a perfeição é superestimada. É só perguntar para a sua ex-namorada.",
      "Não desista dos seus sonhos, a menos que o seu sonho seja se tornar um cantor de karaokê profissional.",
      "Se você está em um buraco, pare de cavar. Ou então, pelo menos, comece a cavar mais fundo para ver onde isso leva.",
      "Não se preocupe tanto em ser o melhor, o importante é se divertir. E se divertir às custas dos seus amigos, é claro.",
      "Se você está tendo um dia ruim, lembre-se que sempre há chocolate quente e Netflix. Ou pelo menos, há chocolate quente.",
      "Não deixe que o fracasso te derrube, a menos que você esteja jogando dominó. Nesse caso, é melhor deixar mesmo.",
      "Se a vida te dá limões, faça limonada. E então, venda para os seus vizinhos a um preço exorbitante. Afinal, a vida é uma competição.",
      "Não desista dos seus sonhos, a menos que o seu sonho seja se tornar um mestre de xadrez e ficar sozinho o resto da vida.",
      "Se você acha que está com azar, pense positivo! Pelo menos você não é o protagonista de um filme de terror.",
      "Não desista dos seus sonhos, a menos que o seu sonho seja se tornar um influenciador de mídia social. Nesse caso, é melhor desistir agora.",
      "Se você está se sentindo para baixo, lembre-se que sempre há pizza. E se não houver, é hora de fazer uma mudança na sua vida.",
      "Não se preocupe tanto com o futuro, o importante é viver o momento. A menos que você esteja em um avião, aí é melhor se preocupar mesmo.",
      "Se a vida te dá limões, faça limonada. E então, jogue a limonada no rosto de alguém que você não gosta.",
      "Não deixe que o fracasso te derrube, a menos que você esteja no parque de diversões. Aí é melhor segurar bem forte na barra de segurança.",
      "Se você está com problemas, lembre-se que sempre há uma saída. A menos que você esteja em um labirinto, aí é melhor começar a chorar mesmo.",
      "Não seja tão duro consigo mesmo, a menos que você esteja tentando levantar uma barra de ferro. Aí é melhor mesmo ser duro.",
      "Se você está tendo um dia ruim, lembre-se que sempre há uma luz no fim do túnel. E se não houver, é hora de começar a cavar um novo túnel.",
      "Não desista dos seus sonhos, a menos que o seu sonho seja se tornar um vidente. Nesse caso, é melhor se dedicar a outra coisa.",
    ]

    this.querbrarBiscoito=this.querbrarBiscoito.bind(this);
    this.novoBiscoito=this.novoBiscoito.bind(this)
  }

  querbrarBiscoito(){
    let aleatorio=Math.floor(Math.random()*this.frases.length);
    this.setState({
      frasetxt:this.frases[aleatorio],
      img:require('./assets/biscoitoAberto.png'),
      quebrou:true
    });

  }
  novoBiscoito(){
    this.setState({
      frasetxt:'Frase da Sorte',
      img:require('./assets/biscoito.png'),
      quebrou:false
    })
  }

  render(){
  return (
    <View style={styles.container}> 
      <Text style={styles.titulo}>{this.state.frasetxt}</Text>
    <Image  //para ter uma imagem é necessário 2 atributos: souce e style
      source={this.state.img}
      style={styles.img}
    />
      {!this.state.quebrou ? (
      <TouchableOpacity style={styles.botaoQuebrar} onPress={this.querbrarBiscoito}> 
        <Text style={styles.txtbotao}>Quebrar Biscoito</Text>
      </TouchableOpacity>
      ):(null)}
      {this.state.quebrou ? (
      <TouchableOpacity style={styles.botaoLimpar} onPress={this.novoBiscoito}>
        <Text style={styles.txtbotao}>Novo Biscoito</Text>
      </TouchableOpacity>):(null)}

      <Text style={styles.titulo}></Text>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 30,
    fontWeight: 'bold'
  },
  botaoQuebrar:{
    width:'65%',
    height:50,
    backgroundColor:'green',
    borderRadius: 10,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:15,
  },
  botaoLimpar:{
    width:'65%',
    height:50,
    backgroundColor:'red',
    borderRadius: 10,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:15,
  }
  ,
  txtbotao:{
    fontSize:22,
    color:'#fff'
  },
  img:{//para a imagem aparecer na tela é preciso ter alguma estilização de altura e largura para não ultrapassar os limites de um celular
    width:250,
    height:250
  }
});

export default AulaImagem;