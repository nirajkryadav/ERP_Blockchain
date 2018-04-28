package main

import (
	"fmt"
	"github.com/akshitkrnagpal/erp-blockchain/blockchain"
	"os"
)

func main() {
	// Definition of the Fabric SDK properties
	fSetup := blockchain.FabricSetup{
		OrgAdmin:        "Admin", 
		OrgName:         "Org1", 
		ConfigFile:      "config.yaml",
		
		// Channel parameters 
		ChannelID:       "erp-blockchain",
		ChannelConfig:   os.Getenv("GOPATH") + "/src/github.com/akshitkrnagpal/erp-blockchain/fixtures/artifacts/erp-blockchain.channel.tx",
	}

	// Initialization of the Fabric SDK from the previously set properties
	err := fSetup.Initialize()
	if err != nil {
		fmt.Printf("Unable to initialize the Fabric SDK: %v\n", err)
	}
}