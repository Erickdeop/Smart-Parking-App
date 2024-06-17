// Mapeamento de Hardware -------------------------------------------------------

//RFID:
#include <SPI.h>
#include <MFRC522.h>

#define SS_PIN 10 
#define RST_PIN 9

MFRC522 mfrc522(SS_PIN, RST_PIN);   // Create MFRC522 instance.

//Servomotor:
#include <Servo.h>
Servo servo1;

//Sensor ultrassônico 1:

#define     trig1        8   //pino de sinal do HCSR04 referente ao pino TRIG (RX)
#define     echo1        7   //pino de sinal do HCSR04 referente ao pino ECHO (TX) 

//Sensor ultrassônico 2:

#define     trig2        4   //pino de sinal do HCSR04 referente ao pino TRIG (RX)
#define     echo2        3   //pino de sinal do HCSR04 referente ao pino ECHO (TX)

//Sensor ultrassônico 3:

#define     trig3        6   //pino de sinal do HCSR04 referente ao pino TRIG (RX)
#define     echo3        5   //pino de sinal do HCSR04 referente ao pino ECHO (TX)
 

 // Variáveis Globais ------------------------------------------------------------

double          distancia1;            //Armazena a distância
unsigned long   tempo1;                //variável refente ao tempo

double          distancia2;            //Armazena a distância
unsigned long   tempo2;                //variável refente ao tempo

double          distancia3;            //Armazena a distância
unsigned long   tempo3;                //variável refente ao tempo

char st[20];
 

// Setup ------------------------------------------------------------
void setup() 
{
  
  Serial.begin(9600);   // Inicia a serial

  //Servomotor:
  servo1.attach(2);   // Anexa o Servo ao Pin4
  servo1.write(180); //seta o servomotor no angulo 0

  //RFID:
 
  SPI.begin();      // Inicia  SPI bus
  mfrc522.PCD_Init();   // Inicia MFRC522
  
  //Sensor ultrassônico 1:
  pinMode(trig1, OUTPUT); //definindo trig como saída 
  pinMode(echo1, INPUT); //definindo echo como entrada
  digitalWrite(trig1, LOW); //startando o pino em sinal baixo

  //Sensor ultrassônico 2:
  pinMode(trig2, OUTPUT); //definindo trig como saída 
  pinMode(echo2, INPUT); //definindo echo como entrada
  digitalWrite(trig2, LOW); //startando o pino em sinal baixo

  //Sensor ultrassônico 3:
  pinMode(trig3, OUTPUT); //definindo trig como saída 
  pinMode(echo3, INPUT); //definindo echo como entrada
  digitalWrite(trig3, LOW); //startando o pino em sinal baixo
 
 
}

double SensorVaga1() {
  //Medindo a distância 
  digitalWrite(trig1, HIGH);
  delayMicroseconds(10);
  digitalWrite(trig1, LOW);

  tempo1 = pulseIn(echo1, HIGH);

  distancia1 = tempo1/58;

  if(distancia1 <= 8) return 1; //VAGA OCUPADA

  else return 0; //VAGA DISPONÍVEL

}

double SensorVaga2() {
  //Medindo a distância 
  digitalWrite(trig2, HIGH);
  delayMicroseconds(10);
  digitalWrite(trig2, LOW);

  tempo2 = pulseIn(echo2, HIGH);

  distancia2 = tempo2/58;

  if(distancia2 <= 8) return 1; //VAGA OCUPADA

  else return 0; //VAGA DISPONÍVEL

}

double SensorVaga3() {
  //Medindo a distância 
  digitalWrite(trig3, HIGH);
  delayMicroseconds(10);
  digitalWrite(trig3, LOW);

  tempo3 = pulseIn(echo3, HIGH);

  distancia3 = tempo3/58;

  if(distancia3 <= 8) return 1; //VAGA OCUPADA

  else return 0; //VAGA DISPONÍVEL

}


String ModuloRFID() {
  // Procura novos cartoes
  if ( ! mfrc522.PICC_IsNewCardPresent()) 
  {
    return "";
  }
  // Seleciona um dos cartoes
  if ( ! mfrc522.PICC_ReadCardSerial()) 
  {
    return "";
  }

  String retorno = "";
  String conteudo = "";
  byte letra;

  for (byte i = 0; i < mfrc522.uid.size; i++) 
  {
     conteudo.concat(String(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " "));
     conteudo.concat(String(mfrc522.uid.uidByte[i], HEX));
  }

  conteudo.toUpperCase();
  
  if (conteudo.substring(1) == "23 BB 28 14") //UID 1 - Chaveiro
  {
    // Serial.println("Acesso autorizado");

    retorno.concat("id: ");
    retorno.concat("\"");
    retorno.concat(conteudo.substring(1));
    retorno.concat("\"");
    retorno.concat(", autorizado: ");
    retorno.concat(true);
       
    ServoMotor();
   
  }
 
  if (conteudo.substring(1) != "23 BB 28 14") //outros cartoes
  {
    // Serial.println("Acesso negado!");

    retorno.concat("id: ");
    retorno.concat("\"");
    retorno.concat(conteudo.substring(1));
    retorno.concat("\"");
        retorno.concat(", autorizado: ");
    retorno.concat(false);
        
  }
  
  return retorno;
}

void ServoMotor() {
  servo1.write(90);
  // delay(3000);
  servo1.write(180);
}

String VagaMaisProxima() {
  String vagaMaisProxima = "";
   
  if (SensorVaga1() == 0) {
    vagaMaisProxima.concat("vagaMaisProxima: 1");
  }
      
  else if (SensorVaga2() == 0) {
    vagaMaisProxima.concat("vagaMaisProxima: 2");
  }
  
  else if (SensorVaga3() == 0) {
    vagaMaisProxima.concat("vagaMaisProxima: 3");
  }
  
  else {
    vagaMaisProxima.concat("vagaMaisProxima: -1");
  }
    
  return vagaMaisProxima;
}


String NumeroVagasDisponiveis() {
  int numVagas = 0;
  String vagas = "";

  if (SensorVaga1() == 0) {
    numVagas++;
  }
      
  if (SensorVaga2() == 0) {
    numVagas++;
  }
  
  if (SensorVaga3() == 0) {
    numVagas++;
  }

  vagas.concat("numeroVagasDisponiveis: ");
  vagas.concat(numVagas);

  return vagas;
}
 
void loop() {
  String vagaMaisProxima, numeroVagasDisponiveis, rfid;
  String serial = "";
  
  vagaMaisProxima = VagaMaisProxima();
  numeroVagasDisponiveis = NumeroVagasDisponiveis();
  rfid = ModuloRFID();

  // Formata resposta
  serial.concat("{ ");
  serial.concat(vagaMaisProxima);
  serial.concat(", ");
  serial.concat(numeroVagasDisponiveis);

  if (rfid.length() != 0) {
    serial.concat(", ");
    serial.concat(rfid);  
  }

  serial.concat(" }");
  Serial.println(serial);

  delay(2000);
} 
