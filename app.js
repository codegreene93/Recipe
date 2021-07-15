const vue = new Vue ({
    el: '#recipe',

    data: {
        heading: 'Apple Pie',
        img: {
            src: "https://images.unsplash.com/photo-1582841699291-4d9c3537c313?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
            alt: "Apple Pie picture",
        },
        serving: 'Serving suggestion 3 people',
        ingrediants: ['apple', 'flour', 'butter'],
        steps: ['Put a layer of paper towels on a large baking sheet. Quarter, core, peel and slice the apples about 5mm thick and lay evenly on the baking sheet. Put paper towels on top and set aside while you make and chill the pastry.',
        'For the pastry, beat the butter and sugar in a large bowl until just mixed. Break in a whole egg and a yolk (keep the white for glazing later). Beat together for just under 1 min – it will look a bit like scrambled egg. Now work in the flour with a wooden spoon, a third at a time, until it’s beginning to clump up, then finish gathering it together with your hands. Gently work the dough into a ball, wrap in cling film, and chill for 45 mins. Now mix the 140g/5oz sugar, the cinnamon and flour for the filling in a bowl that is large enough to take the apples later.',
    ],
        showIngrediants: true,
        showMethod: true,
        newIngrediant: '',
        newStep: '',
    },
    methods: {
        toggleIngrediants: function (){
            this.showIngrediants = !this.showIngrediants;
        },
        toggleMethod: function (){
            this.showMethod = !this.showMethod;
        },
        addIngrediant: function (){
            let newIngrediant = this.newIngrediant;
            this.ingrediants.push(newIngrediant);
        },
        addMethod: function (){
            let newMethod = this.newStep;
            this.steps.push (newMethod);
        }
    }
})