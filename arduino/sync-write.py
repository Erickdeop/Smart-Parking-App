import serial
import time

# Configurações da porta serial
serial_port = '/dev/ttyUSB0'  # Substitua pela porta serial correta no seu sistema
baud_rate = 9600
file_path = 'dados.txt'

# Abre a porta serial
ser = serial.Serial(serial_port, baud_rate, timeout=1)

try:
    # Abre o arquivo para adicionar dados
    with open(file_path, 'a') as file:
        while True:
            # Lê uma linha da porta serial
            line = ser.readline().decode('utf-8').strip()
            
            if line:
                # Escreve a linha no arquivo
                file.write(line + '\n')
                file.flush()  # Garante que os dados sejam gravados imediatamente
                print(f'Gravado: {line}')
            
            # Aguarda um pouco antes de ler novamente
            time.sleep(1)
except KeyboardInterrupt:
    print("Programa interrompido pelo usuário.")
finally:
    # Fecha a porta serial
    ser.close()
