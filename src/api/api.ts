
        export const fetchSlotMachines = async () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        "slotMachines": [
                            {
                            "id": 1,
                            "name": "Slot Machine A",
                            "betAmounts": [1, 5, 10, 20]
                            },
                            {
                            "id": 2,
                            "name": "Slot Machine B",
                            "betAmounts": [2, 5, 25, 50]
                            },
                            {
                            "id": 3,
                            "name": "Slot Machine C",
                            "betAmounts": [5, 10, 25, 100]
                            }
                            ]
                    })
                } , 1000)
            })
        }
