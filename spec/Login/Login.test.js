import React from 'react';
import {mount, shallow} from 'enzyme';
import '../setupTest';
import {Login} from "../../src/components/Login/Login";
import {Redirect} from 'react-router-dom';



describe('Login', () => {
    let component;
    describe('when not logged yet', () => {
        beforeAll(() => {
            component = shallow(<Login logged={false}/>);
        });

        it('should render username input', () => {
            expect(component.exists('#username')).toBe(true);
        });

        it('should render password input', () => {
            expect(component.exists('#password')).toBe(true);
        });

        it('should render button', () => {
            expect(component.exists('button')).toBe(true);
        });

        it('should not render Redirect', () => {
           expect(component.find(Redirect).isEmpty()).toBe(true);
        });
    });

    describe('when already logged', () => {
        beforeAll(() => {
            component = shallow(<Login logged={true}/>);
        });

        it('should not render username input', () => {
            expect(component.exists('#username')).toBe(false);
        });

        it('should not render password input', () => {
            expect(component.exists('#password')).toBe(false);
        });

        it('should not render button', () => {
            expect(component.exists('button')).toBe(false);
        });

        it('should render Redirect', () => {
            expect(component.find(Redirect).props().to).toBe('/Profile');
        });
    });

    describe('when login button clicked', () => {
        let onLogin;
        beforeEach(() => {
            onLogin = jest.fn();
            component = shallow(<Login logged={false} onLogin={onLogin}/>);
            component.instance().handleClick();
        });

        describe('when use correct password and username', () => {
           beforeAll(() => {
               Login.prototype.username = {value: '1'};
               Login.prototype.password = {value: '1'};
           });
            it('should call onLogin method props', () => {
                expect(onLogin).toHaveBeenCalled();
            });
        });

        describe('when use incorrect password and username', () => {
            beforeAll(() => {
                Login.prototype.username = {value: '2'};
                Login.prototype.password = {value: '2'};
            });
            it('should call onLogin method props', () => {
                expect(onLogin).not.toHaveBeenCalled();
            });
        });
    });
})