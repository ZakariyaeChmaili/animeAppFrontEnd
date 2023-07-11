import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeVideoComponent } from './anime-video.component';

describe('AnimeVideoComponent', () => {
  let component: AnimeVideoComponent;
  let fixture: ComponentFixture<AnimeVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimeVideoComponent]
    });
    fixture = TestBed.createComponent(AnimeVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
