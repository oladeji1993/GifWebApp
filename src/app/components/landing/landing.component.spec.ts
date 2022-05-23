import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { from } from "rxjs"

import { LandingComponent } from './landing.component';
import { DataService } from 'src/app/service/data.service';
import { GifsComponent } from '../gifs/gifs.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [LandingComponent, GifsComponent],
      providers: [DataService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have gifs component', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-gifs')).not.toBe(null);
  });

  it('should check if show is false', () => {
    expect(component.show).toBeFalsy();
  });

  it('should check if searchTerm is emtpy', () => {
    expect(component.searchTerm).toEqual('');
  });

  it('should check if searchTerm has a value', () => {
    fixture.whenStable().then(() => {
      let input = fixture.debugElement.query(By.css('input'));
      let el = input.nativeElement;
      el.value = 'test';
      expect(el.value).toEqual('test');
    })
  });


  it('should check if searchTerm has a value', () => {
    fixture.whenStable().then(() => {
      let input = fixture.debugElement.query(By.css('input'));
      let el = input.nativeElement;
      el.value = 'test';
      expect(el.value).toEqual('test');
    })
  });

  it('should call search method with search value', fakeAsync(() => {
    spyOn(component, 'search');
    component.searchTerm = 'test';
    let btn = fixture.debugElement.nativeElement.querySelector('button');
    btn.click();
    tick();
    expect(component.search).toHaveBeenCalled();
    expect(component.search).toHaveBeenCalledWith('test');
  }));

  it('should load gifs data from the server', () => {
    let service = TestBed.get(DataService);
    spyOn(service, 'getGifsData').and.returnValue(from([{ data: [{ data: 'value' }, { data: 'value' }, { data: 'value' }] }]));
    component.searchTerm = 'test';
    let btn = fixture.debugElement.nativeElement.querySelector('button');
    btn.click();
    expect(component.gifs.length).toBe(3)
  });
});
