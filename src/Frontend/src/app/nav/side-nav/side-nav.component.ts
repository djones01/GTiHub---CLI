import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/primeng";

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
    private open: boolean = false;

    private toggleSidebar() {
        this.open = !this.open;
    }

    private menuItems: MenuItem[]

    ngOnInit() {
        this.menuItems = [
            {
                label: "Projects",
                icon: "fa-dashboard",
                items: [
                    {
                        label: "View All",
                        icon: "fa-binoculars",
                        routerLink: ["/pages/project"]
                    },
                    {
                        label: "New",
                        icon: "fa-plus",
                    }
                ]
            },
            {
                label: "Sources",
                items: [
                    {
                        label: "View All",
                        icon: "fa-binoculars",
                        routerLink: ["/pages/source"]
                    },
                    {
                        label: "New",
                        icon: "fa-plus",
                    }
                ]
            },
            {
                label: "Targets",
                items: [
                    {
                        label: "View All",
                        icon: "fa-binoculars"
                    },
                    {
                        label: "New",
                        icon: "fa-plus",
                    }
                ]
            },
            {
                label: "Maps",
                items: [
                    {
                        label: "View All",
                        icon: "fa-binoculars",
                        routerLink: ["/pages/map"]
                    },
                    {
                        label: "New",
                        icon: "fa-plus",
                        routerLink: ["/pages/map/edit"]
                    }
                ]
            },
            {
                label: "Admin Tools",
                icon: "fa-cog",
                items: [
                    {
                        label: "Users",
                        icon: "fa-users",
                        items: [
                            {
                                label: "View All",
                                icon: "fa-binoculars",
                                routerLink: ["/pages/user"]
                            },
                            {
                                label: "New",
                                icon: "fa-user-plus",
                            }
                        ]
                    },
                    {
                        label: "Clients",
                        icon: "fa-user",
                        items: [
                            {
                                label: "View All",
                                icon: "fa-binoculars",
                                routerLink: ["/pages/client"]
                                
                            },
                            {
                                label: "New",
                                icon: "fa-user-plus",
                            }
                        ]
                    }
                ]
            }
        ];
    }
}
