import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedAnimeComponent } from './searched-anime.component';

describe('SearchedAnimeComponent', () => {
  let component: SearchedAnimeComponent;
  let fixture: ComponentFixture<SearchedAnimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchedAnimeComponent]
    });
    fixture = TestBed.createComponent(SearchedAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
