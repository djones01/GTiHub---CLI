import { Injectable } from '@angular/core';
import { AppSettings } from '../app-settings';
import { TreeNode } from 'primeng/primeng';
import { DataService } from '../shared/data/data.module';

@Injectable()
export class LoggingService {

  getFullTree(): TreeNode[]{
    this.dataService.GetAll('Logs').subscribe((tree: TreeNode[]) => {
        return tree;
      }
    );
    return [];
  }


  constructor(private appSettings: AppSettings, private dataService: DataService) { }

}
