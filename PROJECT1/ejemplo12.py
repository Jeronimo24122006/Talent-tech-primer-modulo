import numpy as np
import gym
import random

# Crear el entorno
env = gym.make("Taxi-v3")

# Parámetros de Q-learning
learning_rate = 0.1  # Tasa de aprendizaje
discount_factor = 0.99  # Factor de descuento
epsilon = 0.1  # Tasa de exploración (epsilon-greedy)
num_episodes = 1000  # Número de episodios de entrenamiento

# Inicializar la tabla Q
# El tamaño de la tabla es el número de estados x el número de acciones posibles
q_table = np.zeros([env.observation_space.n, env.action_space.n])

# Función para elegir una acción utilizando la política epsilon-greedy
def choose_action(state):
    if random.uniform(0, 1) < epsilon:
        # Exploración: elegir una acción aleatoria
        return env.action_space.sample()
    else:
        # Explotación: elegir la acción con el mayor valor Q
        return np.argmax(q_table[state])

# Entrenamiento del agente
for episode in range(num_episodes):
    state = env.reset()  # Reiniciar el entorno para cada episodio
    done = False
    total_reward = 0

    while not done:
        # Elegir una acción usando la política epsilon-greedy
        action = choose_action(state)
        
        # Ejecutar la acción y observar el siguiente estado y la recompensa
        next_state, reward, done, _, _ = env.step(action)
        
        # Actualizar la tabla Q usando la fórmula de Q-learning
        q_table[state, action] = q_table[state, action] + learning_rate * (reward + discount_factor * np.max(q_table[next_state]) - q_table[state, action])
        
        state = next_state  # Actualizar el estado
        total_reward += reward  # Acumular recompensa

    # Ocasionalmente imprimir el progreso
    if episode % 100 == 0:
        print(f"Episode {episode}, Total Reward: {total_reward}")

# Evaluación del rendimiento después del entrenamiento
state = env.reset()
done = False
total_reward = 0
while not done:
    action = np.argmax(q_table[state])  # El agente sigue la política aprendida
    state, reward, done, _, _ = env.step(action)
    total_reward += reward

print(f"Total Reward after training: {total_reward}")
