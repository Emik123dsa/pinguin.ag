/* eslint-disable @angular-eslint/no-host-metadata-property */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'pinguin-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  host: {
    'class': 'pinguin-container',
    '[attr.id]': 'id',
    '[class.pinguin-container-server]': '_isServer',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerComponent {
  public static nextUniqueId = 0;

  /**
   * Determines whether server is.
   */
  protected readonly _isServer!: boolean;

  /**
   * Container id of container component.
   */
  private _uniqueId = `pinguin-container-${ContainerComponent.nextUniqueId++}`;

  @Input()
  public set id(value: string) {
    this._id = value || this._uniqueId;
  }
  public get id() {
    return this._id;
  }
  private _id!: string;

  /**
   * Constructs an instance of ContainerComponent.
   *
   * @param  {Platform} _platform
   * @memberof ContainerComponent
   */
  public constructor(private readonly _platform: Platform) {
    this._isServer = !this._platform.isBrowser;
  }
}
