import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

/*
|--------------------------------------------------------------------------
| Enterprise Route Animations
|--------------------------------------------------------------------------
| Centralized reusable route transition animations.
|--------------------------------------------------------------------------
*/

export const routeAnimations = trigger(
  'routeAnimations',

  [
    transition('* <=> *', [
      /*
      |--------------------------------------------------------------------------
      | Initial Styles
      |--------------------------------------------------------------------------
      */

      query(
        ':enter, :leave',

        [
          style({
            position: 'absolute',
            width: '100%',
          }),
        ],

        {
          optional: true,
        },
      ),

      /*
      |--------------------------------------------------------------------------
      | Enter Animation
      |--------------------------------------------------------------------------
      */

      query(
        ':enter',

        [
          style({
            opacity: 0,
            transform: 'translateY(10px)',
          }),
        ],

        {
          optional: true,
        },
      ),

      /*
      |--------------------------------------------------------------------------
      | Leave + Enter Animation
      |--------------------------------------------------------------------------
      */

      group([
        query(
          ':leave',

          [
            animate(
              '150ms ease',

              style({
                opacity: 0,
              }),
            ),
          ],

          {
            optional: true,
          },
        ),

        query(
          ':enter',

          [
            animate(
              '250ms ease',

              style({
                opacity: 1,
                transform: 'translateY(0)',
              }),
            ),
          ],

          {
            optional: true,
          },
        ),
      ]),
    ]),
  ],
);
