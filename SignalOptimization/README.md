## Setting Up Bangalore Networks

The folder **BangaloreNetworks** contains simulation and network files for Sarjapur and KSR.

### Prerequisites

Ensure you have SUMO (Simulation of Urban MObility) and its tools installed. Follow these steps to install:

1. Add SUMO's stable repository:
    ```bash
    sudo add-apt-repository ppa:sumo/stable
    sudo apt-get update
    ```

2. Install SUMO and its tools:
    ```bash
    sudo apt-get install sumo sumo-tools sumo-doc
    ```

3. Set SUMO_HOME variable. Default installation path is `/usr/share/sumo`:
    ```bash
    echo 'export SUMO_HOME="/usr/share/sumo"' >> ~/.bashrc
    source ~/.bashrc
    ```

    For improved performance with Libsumo, declare the variable:
    ```bash
    export LIBSUMO_AS_TRACI=1
    ```

    Note: Enabling this may restrict the use of sumo-gui and parallel simulations ([more details](https://sumo.dlr.de/docs/Libsumo.html)).

### Installing SUMO-RL

You can install SUMO-RL via pip:

Stable release version:
```bash
pip install sumo-rl


Alternatively, you can install the latest (unreleased) version from GitHub:

git clone https://github.com/LucasAlegre/sumo-rl
cd sumo-rl
pip install -e .


