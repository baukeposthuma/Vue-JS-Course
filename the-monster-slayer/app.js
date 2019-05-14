var vm = new Vue({
    el: '#app',
    data: {
        isGameStared: false,
        player: {
            name: 'player',
            health: 100,
        },
        monster: {
            name: 'monster',
            health: 100,
        },
        log: [],
    },
    methods: {
        startGame: () => {
            vm.isGameStared = true
            vm.player.health = 100
            vm.monster.health = 100
            vm.log = []
        },
        attackMonster: () => {
            vm.cast(
                vm.player,
                vm.monster,
                vm.randomAmount(10)
            )
            if (vm.checkWin()) {
                return
            }
            vm.attackPlayer()
        },
        attackPlayer: () => {
            vm.cast(
                vm.monster,
                vm.player,
                vm.randomAmount(15)
            )
            vm.checkWin()
        },
        specialAttackMonster: () => {
            vm.cast(
                vm.player,
                vm.monster,
                vm.randomAmount(20)
            )
            if (vm.checkWin()) {
                return
            }
            vm.attackPlayer()
        },
        randomAmount: (max) => {
            return Math.round(Math.random() * max)
        },
        healPlayer: () => {
            vm.cast(
                vm.player,
                vm.player,
                vm.randomAmount(-15)
            )

            if (vm.player.health > 100) {
                vm.player.health = 100
            }
        },
        cast: (caster, reciever, amount) => {
            reciever.health -= amount
            vm.mutateLog(caster.name, reciever.name, amount);
            vm.checkWin()
        },
        mutateLog: (caster, reciever, amount) => {
            vm.log.unshift({
                caster,
                reciever,
                amount
            })
        },
        checkWin: () => {
            if (vm.monster.health <= 0) {
                if (confirm('You won! Start a new game?')) {
                    vm.startGame()
                } else {
                    vm.startGame()
                    vm.isGameStared = false
                }
                return true;
            } else if (vm.player.health <= 0) {
                if (confirm('You lost! Start a new game?')) {
                    vm.startGame()
                } else {
                    vm.startGame()
                    vm.isGameStared = false
                }
                return true;
            }
            return false;
        }
    }
})
