angular.module('votr', [])
    .controller('VotrController', function() {
        var votr = this;
        votr.listItems = [
            'Chuy\s',
            'Cafe Brazil',
            '1050'
        ];

        votr.addListItem = function() {
            votr.listItems.push(votr.listItemText);
            votr.listItemText = '';
        }

        votr.pickItem = function() {
            votr.selectedItem = votr.listItems[Math.floor(Math.random()*votr.listItems.length)]
        }
    });

