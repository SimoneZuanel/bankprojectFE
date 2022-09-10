import { INavbarData } from "./subnavdata";

export const navbarData: INavbarData[] = [
    {
        routerLink: 'dashboard',
        icon: 'bi bi-house-door',
        label: 'Dashboard'
    },
    {
        routerLink: 'pagamenti-online',
        icon: 'bi bi-paypal',
        label: 'Paga online',
        expanded: false,
        items: [
            {
                routerLink: 'pagamenti-online/bonifico-bancario',
                label: 'Bonifico Bancario'
            },
            {
                routerLink: 'pagamenti-online/cellcharge',
                label: 'Ricarica Telefonica'
            },
            {
                routerLink: 'pagamenti-online/ricarica-carta',
                label: 'Ricarica Carta',
                expanded: false,
                items: [
                    {
                        routerLink: 'pagamenti-online/mycard',
                        label: 'In Mio Possesso'
                    },
                    {
                        routerLink: 'pagamenti-online/othercard',
                        label: 'Altre Carte'
                    }
                ]
            }
        ]
    },
    {
        routerLink: 'credit-card',
        icon: 'bi bi-credit-card-2-front',
        label: 'I miei conti',
        expanded: false,
        items: [
            {
                routerLink: 'credit-card/conto1',
                label: 'Conto 1'
            },
            {
                routerLink: 'credit-card/conto2',
                label: 'Conto 2'
            }
        ]
    },
    {
        routerLink: 'settings',
        icon: 'bi bi-gear',
        label: 'Impostazioni',
        expanded: false,
        items: [
            {
                routerLink: 'settings/home',
                label: 'Home'
            },
            {
                routerLink: 'settings/account',
                label: 'Account'
            },
            {
                routerLink: 'settings/info',
                label: 'Informazioni Personali'
            }
        ]
    }
]